#include<bits/stdc++.h>
using namespace std;
const int N = 5005;
string s[N];
int pl[N], cnt[N];
int main() {
	ios::sync_with_stdio(0); cin.tie(0);
	int n, m;
	cin >> n >> m;
	for (int i = 1; i <= n; i++) {
		cin >> s[i];
		s[i]=" "+s[i];
	}
	int ans=0;
	for (int j = 1; j <= m; j++) {
		memset(cnt, 0, sizeof cnt);
		for (int i = 1; i <= n; i++) {
			if(s[i][j]=='1') pl[i]++;
			else pl[i]=0;
			cnt[pl[i]]++;
		}
		int res=0;
		for(int k=j;k>=1;k--){
			res+=cnt[k];
			ans=max(ans, k*res);
		}
	}
	cout<<ans;
	return 0;
}
