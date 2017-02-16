#coding=utf-8
import os,tarfile,datetime

ROOTDIR = os.path.abspath('.')
FILELIST = os.listdir(ROOTDIR)

def tarFiles(rootDir,fileList):
    for i in range(0,len(fileList)):
        fPath = os.path.join(rootDir,fileList[i])
        if os.path.isdir(fPath):
            tar = tarfile.open(fileList[i]+'.tar.gz','w:gz')
            print '正在打包 ',rootDir,fileList[i]
            for root,dir,files in os.walk(fPath):
                for file in files:
                    fullpath = os.path.join(root,file)
                    tar.add(fullpath)
            tar.close()
files = []
timeList = []

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
                    nodeStack.append(x+'/'+flist[i])
                    if os.path.isfile(nodeStack[len(nodeStack)-1]):
                        allfiles.append(x+'/'+flist[i])
                    break
        if len(flist)==0 or flag==False:
            nodeStack.pop()
    return allfiles


files = getFileList(ROOTDIR)

#for i in range(0,len(FILELIST)):
#    path = os.path.join(ROOTDIR,FILELIST[i])
#    if os.path.isfile(path):
#        files.append(FILELIST[i])

for i in range(0,len(files)):
    path = os.path.join(ROOTDIR, files[i])
    mtime = os.stat(path).st_mtime
    date = datetime.datetime.fromtimestamp(mtime)
    timeList.append(path+' '+date.strftime('%Y-%m-%d %H:%M:%S'))

print '正在生成资源文件'
f = open(ROOTDIR+'/test.txt','w')
for i in timeList:
    f.write(i)
    f.write('\n')
f.close()

