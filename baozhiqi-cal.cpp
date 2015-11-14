#include<iostream>
using namespace std;
int main()
{
	int month1;
	int md1;
	int day1;
	int year2;
	int month2;
	int md2;
	int day2;
	int sum1;
	int sum2;
	int sum3;
	int year3;
	int month3;
	int day3;
	int md3;
	int cha;
	int ans;
	int sheng;
	int dang;
	cout<<"+--------------------------+"<<endl;
	cout<<"+--欢迎使用保质期计算工具--+"<<endl;
	cout<<"+--------版本V1.0----------+"<<endl;
	cout<<"+--------------------------+"<<endl;
	cout<<endl;
	cout<<endl;
	cout<<"请输入保质期月份，没有输入0:";
	cin>>month1;
	cout<<endl;
	cout<<"请输入保质期天数，没有输入0:";
	cin>>day1;
	if(month1==12)
		md1=365;
	else
        md1=month1*30;
	sum1=day1+md1;								//这是保质期天数
	cout<<"保质期的天数为:"<<sum1<<"天"<<endl;
	cout<<"请输入生产日期的年份:";
	cin>>year2;
	cout<<endl;
	cout<<"请输入生产日期的月份:";
	cin>>month2;
	cout<<endl;
	cout<<"请输入生产日期的日子:";
	cin>>day2;
	cout<<endl;
	if((year2%4==0&&year2%100!=0)||(year2%400==0))
	{
		switch(month2)
		{
			case 1:	md2=0;break;
			case 2:	md2=31;break;
			case 3:	md2=60;break;
			case 4:	md2=91;break;
			case 5:	md2=121;break;
			case 6:	md2=152;break;
			case 7:	md2=182;break;
			case 8:	md2=213;break;
			case 9:	md2=244;break;
			case 10:md2=274;break;
			case 11:md2=305;break;
			case 12:md2=335;break;
			default:cout<<"输入错误！";
		}
		sheng=366;
	}
	//	cout<<"是闰年";
	else
	{
		switch(month2)
		{
			case 1:	md2=0;break;
			case 2:	md2=31;break;
			case 3:	md2=59;break;
			case 4:	md2=90;break;
			case 5:	md2=120;break;
			case 6:	md2=151;break;
			case 7:	md2=181;break;
			case 8:	md2=212;break;
			case 9:	md2=243;break;
			case 10:md2=273;break;
			case 11:md2=304;break;
			case 12:md2=334;break;
			default:cout<<"输入错误！";
		}
		sheng=365;
	}
	sum2=md2+day2;					//这是算生产日是当年的第几天
	
	//	cout<<"不是闰年";
	cout<<"请输入当前日期的年份:";
	cin>>year3;
	cout<<endl;
	cout<<"请输入当前日期的月份:";
	cin>>month3;
	cout<<endl;
	cout<<"请输入当前日期的日子:";
	cin>>day3;
	cout<<endl;
    if((year3%4==0&&year2%100!=0)||(year3%400==0))
	{
	    switch(month3)
		{
			case 1:	md3=0;break;
			case 2:	md3=31;break;
			case 3:	md3=60;break;
			case 4:	md3=91;break;
			case 5:	md3=121;break;
			case 6:	md3=152;break;
			case 7:	md3=182;break;
			case 8:	md3=213;break;
			case 9:	md3=244;break;
			case 10:md3=274;break;
			case 11:md3=305;break;
			case 12:md3=335;break;
			default:cout<<"输入错误！";
		}
		dang=366;
	}
	//	cout<<"是闰年";
	else
	{
		switch(month3)
		{
			case 1:	md3=0;break;
			case 2:	md3=31;break;
			case 3:	md3=59;break;
			case 4:	md3=90;break;
			case 5:	md3=120;break;
			case 6:	md3=151;break;
			case 7:	md3=181;break;
			case 8:	md3=212;break;
			case 9:	md3=243;break;
			case 10:md3=273;break;
			case 11:md3=304;break;
			case 12:md3=334;break;
			default:cout<<"输入错误！";
		}
		dang=365;
	}
	sum3=md3+day3;		 //计算当前日期是当前年份的第几天
	if(year3==year2)		//当前日期与生产日期在同一年内
	{
		cha=sum3-sum2;
		ans=sum1-cha;
	}
	else if(year3-year2==1)  //当前日期比生产日期跨过一年
	{
		cha=sum3+(sheng-sum2);
		ans=sum1-cha;
	}
	else					//当前日期必然比生产日期大，则这是当前日期比生产日期跨两年或以上
	{
		int yearcha=year3-year2;
		cha=sum3+365*yearcha+(sheng-sum2);
		ans=sum1-cha;
	}

	if(ans>0)
		cout<<"没有过期！距离过期还剩"<<ans<<"天"<<endl;
	else
	{
		ans=-ans;
		cout<<"产品已经过期"<<ans<<"天！不可食用！"<<endl;
	}


	return 0;
}
