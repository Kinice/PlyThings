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
	cout<<"+--��ӭʹ�ñ����ڼ��㹤��--+"<<endl;
	cout<<"+--------�汾V1.0----------+"<<endl;
	cout<<"+--------------------------+"<<endl;
	cout<<endl;
	cout<<endl;
	cout<<"�����뱣�����·ݣ�û������0:";
	cin>>month1;
	cout<<endl;
	cout<<"�����뱣����������û������0:";
	cin>>day1;
	if(month1==12)
		md1=365;
	else
        md1=month1*30;
	sum1=day1+md1;								//���Ǳ���������
	cout<<"�����ڵ�����Ϊ:"<<sum1<<"��"<<endl;
	cout<<"�������������ڵ����:";
	cin>>year2;
	cout<<endl;
	cout<<"�������������ڵ��·�:";
	cin>>month2;
	cout<<endl;
	cout<<"�������������ڵ�����:";
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
			default:cout<<"�������";
		}
		sheng=366;
	}
	//	cout<<"������";
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
			default:cout<<"�������";
		}
		sheng=365;
	}
	sum2=md2+day2;					//�������������ǵ���ĵڼ���
	
	//	cout<<"��������";
	cout<<"�����뵱ǰ���ڵ����:";
	cin>>year3;
	cout<<endl;
	cout<<"�����뵱ǰ���ڵ��·�:";
	cin>>month3;
	cout<<endl;
	cout<<"�����뵱ǰ���ڵ�����:";
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
			default:cout<<"�������";
		}
		dang=366;
	}
	//	cout<<"������";
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
			default:cout<<"�������";
		}
		dang=365;
	}
	sum3=md3+day3;		 //���㵱ǰ�����ǵ�ǰ��ݵĵڼ���
	if(year3==year2)		//��ǰ����������������ͬһ����
	{
		cha=sum3-sum2;
		ans=sum1-cha;
	}
	else if(year3-year2==1)  //��ǰ���ڱ��������ڿ��һ��
	{
		cha=sum3+(sheng-sum2);
		ans=sum1-cha;
	}
	else					//��ǰ���ڱ�Ȼ���������ڴ������ǵ�ǰ���ڱ��������ڿ����������
	{
		int yearcha=year3-year2;
		cha=sum3+365*yearcha+(sheng-sum2);
		ans=sum1-cha;
	}

	if(ans>0)
		cout<<"û�й��ڣ�������ڻ�ʣ"<<ans<<"��"<<endl;
	else
	{
		ans=-ans;
		cout<<"��Ʒ�Ѿ�����"<<ans<<"�죡����ʳ�ã�"<<endl;
	}


	return 0;
}
