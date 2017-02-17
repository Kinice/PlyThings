#coding=utf-8
import os,tarfile,datetime

ROOTDIR = os.path.abspath('.')
ROOTFILELIST = os.listdir(ROOTDIR)
txtFileName = 'time.txt'

hasTxt = False
rootDirs = []

diffLines = []
diffDir = []
txtList = []
files = []
timeList = []

def tarFiles(rootDir,fileList):
    for i in range(0,len(fileList)):
        fPath = os.path.join(rootDir,fileList[i])
        if os.path.isdir(fPath):
            tar = tarfile.open(fileList[i]+'.tar','w')
            print '正在打包 ',rootDir,fileList[i]
            for root,dir,files in os.walk(fPath):
                for file in files:
                    fullpath = os.path.join(root,file)
                    tar.add(fullpath)
            tar.close()

def getFileList(rootDir):
    visited = {}
    nodeStack = []
    allfiles = []
    visited[os.path.basename(rootDir)] = 1
    nodeStack.append(rootDir)
    while len(nodeStack)>0:
        if os.path.isdir(nodeStack[len(nodeStack)-1]):
            x = nodeStack[len(nodeStack)-1]
            flist = os.listdir(x)
        else:
            nodeStack.pop()
            continue
        flag = False
        if len(flist)>0:
            for i in range(0,len(flist)):
                if not flist[i] in visited.keys():
                    visited[flist[i]] = 1
                    flag = True
                    nodeStack.append(os.path.join(x,flist[i]))
                    if os.path.isfile(nodeStack[len(nodeStack)-1]):
                        allfiles.append(os.path.join(x,flist[i]))
                    break
        if len(flist)==0 or flag==False:
            nodeStack.pop()
    return allfiles

def getFileStat(flist):
    print '正在读取文件信息'
    timeList = []
    for i in range(0,len(flist)):
        mtime = os.stat(flist[i]).st_mtime
        date = datetime.datetime.fromtimestamp(mtime)
        timeList.append(flist[i]+' '+date.strftime('%Y-%m-%d %H:%M:%S'))

    return timeList

def createTxt(dir,name,tlist):
    print '正在生成',name,'资源文件'
    f = open(os.path.join(dir,name),'w')
    for i in tlist:
        f.write(i)
        f.write('\n')
    f.close()

for i in ROOTFILELIST:
    if os.path.isdir(os.path.join(ROOTDIR,i)):
        rootDirs.append(os.path.join(ROOTDIR,i))
    else:
        if i == txtFileName:
            hasTxt = True

print '正在读取文件列表'
for i in rootDirs:
    l = getFileList(os.path.join(ROOTDIR,i))
    if(len(l)>0):
        for j in l:
            files.append(j)
timeList = getFileStat(files)

if hasTxt:
    f = open(os.path.join(ROOTDIR,txtFileName),'r')
    for line in f:
        txtList.append(line.strip('\n'))
    f.close()

    for i in timeList:
        if i not in txtList:
            diffLines.append(i)
    for i in txtList:
        if i not in timeList:
            diffLines.append(i)
    if len(diffLines)>0:
        for i in diffLines:
            if os.path.basename(os.path.dirname(i[:-20])) not in diffDir:
                diffDir.append(os.path.basename(os.path.dirname(i[:-20])))

        tarFiles(ROOTDIR,diffDir)

        createTxt(ROOTDIR,txtFileName,timeList)
    else:
        print '检测无文件修改'

else:
    createTxt(ROOTDIR,txtFileName,timeList)

    tarFiles(ROOTDIR,rootDirs)


