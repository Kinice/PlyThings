#include<iostream>
using namespace std;
int main(){
	int h;
	int m;
	int s;
	int n;
	cin>>n;
	m = n/60;
	h = m/60;
	s = n%60;
	m = m%60;
	cout<<h<<":"<<m<<":"<<s;
	return 0;
}
