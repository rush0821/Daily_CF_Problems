#include<bits/stdc++.h>
using namespace std;
const int N=2e5+5;
int n, l, x, y, a[N], res;
//bool f[N];
map<int, int> f;
int main(){
	cin>>n>>l>>x>>y;
	for(int i=1;i<=n;i++) cin>>a[i];
	bool fg=1;
	for(int i=1, j=2;i<=n;i++){//
		while(j<n&& a[j]-a[i]<x) j++;
		if(a[j]-a[i]==x){
			fg=0;
			break;
		}
		if(a[i]+x<=l) f[a[i]+x]=1;//
		if(a[i]-x>=0) f[a[i]-x]=1;//
	}
	if(fg){
		res++;
		bool fg=1;
		int ty=-1;
		for(int i=1, j=2;i<=n;i++){//
			while(j<n&& a[j]-a[i]<y) j++;
			if(a[j]-a[i]==y){//
				fg=0; ty=x;
				break;
			}else if(a[i]+y<=l&&f.count(a[i]+y)){
				fg=0; ty=a[i]+y;
				break;
			}else if(a[i]-y>=0&&f.count(a[i]-y)){
				fg=0; ty=a[i]-y;
				break;
			}
		}
		if(fg){
			cout<<2<<endl;
			cout<<x<<" "<<y;
		}else{
			cout<<1<<endl;
			cout<<ty;
		}
	}else{
		bool fg=1;
		for(int i=1, j=2;i<=n&&a[i]+y<=l;i++){
			while(j<n&& a[j]-a[i]<y) j++;
			if(a[j]-a[i]==y){
				fg=0;
				break;
			}
		}
		if(fg){
			cout<<1<<endl;
			cout<<y;
		}else{
			cout<<0;
		}
	}
	return 0;
}
