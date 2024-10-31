#include<bits/stdc++.h>
using namespace std;
typedef long long LL;
const int N=500005;
int a[N];
int main(){
	int n;
	cin>>n;
	for(int i=1;i<=n;i++) cin>>a[i];
	int x1=1, x2, res=0;
	for(int i=2;i<=n;i++){
		if(a[i]==a[i-1]){
			x1=i;
		}
		if(i==n|| (a[i-1]!=a[i]&& a[i]==a[i+1])){//避免111 
			x2=i;
			res=max(res, (x2-x1)/2);
			if(a[x1]==a[x2]){
				for(int j=x1;j<=x2;j++) a[j]=a[x1];
			}else{
				int c=x2-x1-1;
				for(int j=x1+1;j<=x2-1;j++){
					if(j<=x1+c/2) a[j]=a[x1];
					else a[j]=a[x2];
				}
			}
		}
	}
	cout<<res<<"\n";
	for(int i=1;i<=n;i++) cout<<a[i]<<" ";
	return 0;
}
