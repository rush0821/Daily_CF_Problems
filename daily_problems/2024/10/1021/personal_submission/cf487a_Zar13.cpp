#include<bits/stdc++.h>
using namespace std;
int H1, H2, A1, A2, D1, D2, h, a, d, q1, q2;
int c1[105], c2[105];
int main(){
	cin>>H1>>A1>>D1>>H2>>A2>>D2>>h>>a>>d;
	int div1=A2-D1, div2=A1-D2;
	if(div1<=0) q1=1e9;
	else q1=ceil(H1*1.0/div1);
	if(div2<=0) q2=1e9;
	else q2=ceil(H2*1.0/div2);
	if(q1>q2) cout<<0;
	else{
		if(q1==1e9){
			cout<<(-div2+1)*a;
			return 0;
		}
		memset(c1, 0x3f, sizeof c1); memset(c2, 0x3f, sizeof c2);
		c1[q1]=0;
		if(q2<=100) c2[q2]=0;
		for(int i=q1+1;i<=100;i++){
			c1[i]=1e9;
			for(int j=div1;j>=1;j--){
				int t=(div1-j)*d;
				int z=(i-1)*j+1;
				if(H1>i*j) break;//
				t+=max(0, z-H1)*h;
                c1[i]=min(c1[i], t); 
			}
		}
		for(int j=max(1, div2);j<=100;j++){
			int t=(j-div2)*a;
			int q=ceil(H2*1.0/j);
			c2[q]=min(c2[q], t);	
		}
		for(int i=100;i>=1;i--) c1[i]=min(c1[i], c1[i+1]);//
		int ans=1e9;
		for(int i=q1;i<=min(q2, H2)+1;i++){
			ans=min(ans, c1[i]+c2[i-1]);
		}
		cout<<min(ans, div1*d+c2[min(H2, q2)]);
	}
}
