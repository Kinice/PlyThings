#include<iostream>
using namespace std;
int changeTime(int a,int b){
	int s = a*60 + b;
	return s;
}
int addTime(int i,int j){
	int sum = i + j;
	return sum;
}
void showTime(int t){
	int m = t/60;
	int s = t%60;
	cout<<"��ʱ����"<<m<<"��"<<s<<"��"<<endl; 
}
int main(){
	int a,b;
	int c,d;
	int sa;
	int sb = 0;
	int sum;
	int i = 0;
	 
	while(i!=1){
		cout<<"���������׸�ķֺ��룺";
		cin>>a>>b;
		sa = changeTime(a,b);
		if(sb == 0){
			cout<<"������һ�׸�ķֺ��룺";
			cin>>c>>d;
			sb = changeTime(c,d);
			sum = addTime(sa,sb);
		}else{
			sum = addTime(sa,sum);
		}
		cout<<"������һ�����0��û�����1��";
		cin>>i;
	
	}
	showTime(sum);
	cin>>i; 
	return 0;
}
