#coding=utf-8
import os,datetime

ROOTDIR = os.path.abspath('.')
txtFileName = 'translate.txt'
txtList = []

f = open(os.path.join(ROOTDIR,txtFileName),'r')
for line in f:
    txtList.append(line.strip('\n'))
f.close()

for i in txtList:
    print i