/*
 *  main.cpp
 *  Created on: Aug 20, 2013
 *  Author: Kinice
 */

#include <iostream>
#include <string>

using namespace std;

int main() {
    string sz1("TEST1");
    string sz2 = "TEST2";
    char sz3[] = "ABCDEFGHIJKLMN";
    cout << sz1 << " & " << sz2 << " & " << sz3 << endl;

    string sz4(sz3);
    cout << sz4 << endl;

    /*ָ����chs������3��ʼ,�����4���ֽ�*/
    string sz5(sz3, 3, 4);
    cout << sz5 << endl;

    string sz6("0123456789");
    string sz7(sz6);
    cout << sz7 << endl;

    string sz8("0123456789", 2, 3);
    string sz9(sz8);
    cout << sz9 << endl;

    /*��chsǰ3���ַ���Ϊ��ֵ����*/
    string sz10(sz3, 3);
    cout << sz10 << endl;

    /*����10���ַ�,��ֵ����'k'*/
    string sz11(10, 'K');
    cout << sz11 << endl;

    string sz12(10, 'K');
    cout << sz12 << endl;

    sz12 = "TEST";
    cout << sz12 << endl;

    sz12.assign("abc");
    cout << sz12 << endl;

    /*���·���ָ���ַ�����ǰ3��Ԫ����*/
    sz12.assign("AABBCC", 3);
    cout << sz12 << endl;

    /*Swap��������*/
    string sz13 = "AAA";
    string sz14 = "BBB";
    cout << sz13 << " is sz13." << endl;
    cout << sz14 << " is sz14." << endl;
    sz13.swap(sz14);
    cout << sz13 << " is sz13." << endl;
    cout << sz14 << " is sz14." << endl;

    string sz15 = "AAAA";
    sz15 += "BBBB";
    cout << sz15 << endl;
    /*������������ַ���*/
    sz15.append("CCCC");
    cout << sz15 << endl;
    /*����ֻ�����һ���ַ�*/
    sz15.push_back('D');
    cout << sz15 << endl;

    string sz16 = "ABCDEFG";
    /*ͷ������*/
    sz16.insert(0, "ͷ");
    /*β������*/
    sz16.insert(sz16.size(), "β");
    /*�м����*/
    sz16.insert(sz16.size() / 2, "��");
    cout << sz16 << endl;

    string sz17 = "ABCDEFGH";
    /*������1������3    ��ɾ������BCD*/
    sz17.erase(1, 3);
    /*����ָ����Χ�ڵ��ַ��滻��"",������ɾ��FG*/
    sz17.replace(2, 2, "");
    cout << sz17 << endl;

    string sz18 = "ABCDEFGH";
    cout << sz18.length() << endl;
    sz18.clear();
    cout << sz18.length() << endl;
    /*ʹ��earse��������ȫɾ��*/
    sz18 = "0123456789";
    cout << sz18.length() << endl;
    sz18.erase(0, sz18.length());
    cout << sz18.length() << endl;

    string sz19 = "ABCDEFGH";
    /*������2��ʼ3���ֽڵ��ַ�ȫ�滻��"!!!!!"*/
    sz19.replace(2, 3, "!!!!!!");
    cout << sz19 << endl;

    string sz20 = "ABCDEFGH";
    string sz21 = "ABCDEFGH";
    /*�Ƚ��ַ���*/
    if (sz20 == sz21)
        cout << "sz20 == sz21" << endl;
    else
        cout << "sz20 != sz21" << endl;
    if (sz20 != sz21)
        cout << "sz20 != sz21" << endl;
    else
        cout << "sz20 == sz21" << endl;
    if (sz20 > sz21)
        cout << "sz20 > sz21" << endl;
    else
        cout << "sz20 <= sz21" << endl;
    if (sz20 <= sz21)
        cout << "sz20 <= sz21" << endl;
    else
        cout << "sz20 > sz21" << endl;

    string sz22 = "ABC";
    /*�����ַ�����*/
    cout << sz22.size() << endl;
    cout << sz22.length() << endl;

    string sz23 = "ABCDEFG";
    /*�����ַ��Ŀ���������*/
    cout << sz23.max_size() << endl;

    string sz24;
    /*�ж��ַ����Ƿ�Ϊ��*/
    if (sz24.empty())
        cout << "sz24Ϊ�ա�" << endl;
    else
        cout << "sz24��Ϊ��" << endl;
    sz24 = sz24 + "ABC";
    if (sz24.empty())
        cout << "sz24Ϊ�ա�" << endl;
    else
        cout << "sz24��Ϊ��" << endl;

    string sz25 = "ABC111";
    /*��ȡ��һ�ַ�*/
    cout << "use []:" << endl;
    for (int i = 0; i < sz25.length(); i++) {
        cout << sz25[i] << endl;
    }
    cout << endl;
    cout << "use at():" << endl;
    for (int i = 0; i < sz25.length(); i++) {
        cout << sz25.at(i) << endl;
    }
    cout << endl;

    string sz26 = "ABCDEF1234";
    const char* sz27 = sz26.c_str();
    const char* sz28 = sz26.data();
    cout << "use at():" << endl;
    for (int i = 0; i < sz26.length(); i++) {
        cout << "c_str():" << sz27[i] << endl;
        cout << "data():" << sz28[i] << endl;
    }
    cout << "c_str():" << sz27 << endl;
    cout << "data():" << sz28 << endl;

    string sz29 = "ABCDEFG";
    /*����ĳ�����ַ���*/
    /*������5��ʼ2���ֽ�*/
    string sz30 = sz29.substr(5, 2);
    cout << sz30 << endl;

    /*find���Һ���
     s.find(args,pos)    ��s�д�posλ�ÿ�ʼ����args�ĵ�һ�γ���;
     s.rfind(args,pos)    ��s�д�posλ�ÿ�ʼ����args�����һ�γ���;
     s.find_first_not_of(args,pos)    ��s�д�posλ�ÿ�ʼ���ҵ�һ��������args���ַ�;
     s.find_last_not_of(args,pos)    ��s�д�posλ�ÿ�ʼ�������һ��������args���ַ�;
     find�����Ĳ���:args
     c,pos��s��,���±�pos��ǵ�λ�ÿ�ʼ,�����ַ�c,pos��Ĭ��ֵΪ0
     s2,pos��s��,���±�pos��ǵ�λ�ÿ�ʼ,����string����s2,pos��Ĭ��ֵΪ0*/
    string sz31 = "ABCDEFGH123";
    string pattern = "GH";
    string::size_type pos;
    /*������0��ʼ�����ҷ����ַ�����GH����ͷ����*/
    pos = sz31.find(pattern, 0);
    cout << pos << endl;
    string sz32 = sz31.substr(pos, pattern.size());
    cout << sz32 << endl;

    /*�ṩ����STL�ĵ�����֧��*/
    string sz33 = "ABCDEFGH123";
    for (string::iterator iter = sz33.begin(); iter != sz33.end(); iter++) {
        cout << *iter << endl;
    }
    cout << endl;
    
    /*һ��C++�ַ����������ִ�С��
    a)���е��ַ�����������size()��length()�����ǵ�Ч��Empty()��������ַ����Ƿ�Ϊ�ա�
    b)max_size()�����С��ָ��ǰC++�ַ�������ܰ������ַ�����
    �ܿ��ܺͻ�����������ƻ����ַ�������λ�������ڴ�Ĵ�С�й�ϵ��
    ����һ������²��ù�������Ӧ�ô�С�㹻�����õġ�
    ���ǲ����õĻ������׳�length_error�쳣
    c)capacity()���·����ڴ�֮ǰstring���ܰ���������ַ�����
    ������һ����Ҫָ������reserve()�������������Ϊstring���·����ڴ档
    ���·���Ĵ�С�������������Ĭ�ϲ���Ϊ0����ʱ����string���з�ǿ��������*/

    return 0;
}
