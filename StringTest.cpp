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

    /*指定从chs的索引3开始,最后复制4个字节*/
    string sz5(sz3, 3, 4);
    cout << sz5 << endl;

    string sz6("0123456789");
    string sz7(sz6);
    cout << sz7 << endl;

    string sz8("0123456789", 2, 3);
    string sz9(sz8);
    cout << sz9 << endl;

    /*将chs前3个字符作为初值构造*/
    string sz10(sz3, 3);
    cout << sz10 << endl;

    /*分配10个字符,初值都是'k'*/
    string sz11(10, 'K');
    cout << sz11 << endl;

    string sz12(10, 'K');
    cout << sz12 << endl;

    sz12 = "TEST";
    cout << sz12 << endl;

    sz12.assign("abc");
    cout << sz12 << endl;

    /*重新分配指定字符串的前3的元素内*/
    sz12.assign("AABBCC", 3);
    cout << sz12 << endl;

    /*Swap交换方法*/
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
    /*方法可以添加字符串*/
    sz15.append("CCCC");
    cout << sz15 << endl;
    /*方法只能添加一个字符*/
    sz15.push_back('D');
    cout << sz15 << endl;

    string sz16 = "ABCDEFG";
    /*头部插入*/
    sz16.insert(0, "头");
    /*尾部插入*/
    sz16.insert(sz16.size(), "尾");
    /*中间插入*/
    sz16.insert(sz16.size() / 2, "中");
    cout << sz16 << endl;

    string sz17 = "ABCDEFGH";
    /*从索引1到索引3    即删除掉了BCD*/
    sz17.erase(1, 3);
    /*即将指定范围内的字符替换成"",即变相删除FG*/
    sz17.replace(2, 2, "");
    cout << sz17 << endl;

    string sz18 = "ABCDEFGH";
    cout << sz18.length() << endl;
    sz18.clear();
    cout << sz18.length() << endl;
    /*使用earse方法变相全删除*/
    sz18 = "0123456789";
    cout << sz18.length() << endl;
    sz18.erase(0, sz18.length());
    cout << sz18.length() << endl;

    string sz19 = "ABCDEFGH";
    /*从索引2开始3个字节的字符全替换成"!!!!!"*/
    sz19.replace(2, 3, "!!!!!!");
    cout << sz19 << endl;

    string sz20 = "ABCDEFGH";
    string sz21 = "ABCDEFGH";
    /*比较字符串*/
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
    /*返回字符数量*/
    cout << sz22.size() << endl;
    cout << sz22.length() << endl;

    string sz23 = "ABCDEFG";
    /*返回字符的可能最大个数*/
    cout << sz23.max_size() << endl;

    string sz24;
    /*判断字符串是否为空*/
    if (sz24.empty())
        cout << "sz24为空。" << endl;
    else
        cout << "sz24不为空" << endl;
    sz24 = sz24 + "ABC";
    if (sz24.empty())
        cout << "sz24为空。" << endl;
    else
        cout << "sz24不为空" << endl;

    string sz25 = "ABC111";
    /*存取单一字符*/
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
    /*返回某个子字符串*/
    /*从索引5开始2个字节*/
    string sz30 = sz29.substr(5, 2);
    cout << sz30 << endl;

    /*find查找函数
     s.find(args,pos)    在s中从pos位置开始查找args的第一次出现;
     s.rfind(args,pos)    在s中从pos位置开始查找args的最后一次出现;
     s.find_first_not_of(args,pos)    在s中从pos位置开始查找第一个不属于args的字符;
     s.find_last_not_of(args,pos)    在s中从pos位置开始查找最后一个不属于args的字符;
     find操作的参数:args
     c,pos在s中,从下标pos标记的位置开始,查找字符c,pos的默认值为0
     s2,pos在s中,从下标pos标记的位置开始,查找string对象s2,pos的默认值为0*/
    string sz31 = "ABCDEFGH123";
    string pattern = "GH";
    string::size_type pos;
    /*从索引0开始，查找符合字符串“GH”的头索引*/
    pos = sz31.find(pattern, 0);
    cout << pos << endl;
    string sz32 = sz31.substr(pos, pattern.size());
    cout << sz32 << endl;

    /*提供类似STL的迭代器支持*/
    string sz33 = "ABCDEFGH123";
    for (string::iterator iter = sz33.begin(); iter != sz33.end(); iter++) {
        cout << *iter << endl;
    }
    cout << endl;
    
    /*一个C++字符串存在三种大小：
    a)现有的字符数，函数是size()和length()，他们等效。Empty()用来检查字符串是否为空。
    b)max_size()这个大小是指当前C++字符串最多能包含的字符数，
    很可能和机器本身的限制或者字符串所在位置连续内存的大小有关系。
    我们一般情况下不用关心他，应该大小足够我们用的。
    但是不够用的话，会抛出length_error异常
    c)capacity()重新分配内存之前string所能包含的最大字符数。
    这里另一个需要指出的是reserve()函数，这个函数为string重新分配内存。
    重新分配的大小由其参数决定，默认参数为0，这时候会对string进行非强制性缩减*/

    return 0;
}
