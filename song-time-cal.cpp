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
	cout<<"总时间是"<<m<<"分"<<s<<"秒"<<endl; 
}
int main(){
	int a,b;
	int c,d;
	int sa;
	int sb = 0;
	int sum;
	int i = 0;
	 
	while(i!=1){
		cout<<"请输入这首歌的分和秒：";
		cin>>a>>b;
		sa = changeTime(a,b);
		if(sb == 0){
			cout<<"输入下一首歌的分和秒：";
			cin>>c>>d;
			sb = changeTime(c,d);
			sum = addTime(sa,sb);
		}else{
			sum = addTime(sa,sum);
		}
		cout<<"还有下一首请打0，没了请打1：";
		cin>>i;
	
	}
	showTime(sum);
	cin>>i; 
	return 0;
}
