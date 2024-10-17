#include<bits/stdc++.h>
using namespace std;
typedef long long LL;
int main(){
	int n, m, x, d;
	cin>>n>>m;
	LL ans=0;
	while(m--){
		cin>>x>>d;
		ans+=(LL)x*n;
		if(d>0){
			ans+=1LL*(n-1)*n/2*d;
		}else{
			if(n%2==0) ans+=1LL*2*(n/2)*(n/2-1)/2*d+(n/2)*d;
			else ans+=1LL*2*(n/2)*(n/2+1)/2*d;
		}
	}
	cout<<fixed<<setprecision(10)<<ans*1.0/n;
	return 0;
}
