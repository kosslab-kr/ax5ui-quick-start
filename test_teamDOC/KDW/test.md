#BOJ, 12784


```js
#include<stdio.h>
#include<algorithm>
#include<vector>
using namespace std;
int T, n, m;
vector<vector<pair<int, int>>> adj;
int dfs(int h,int p) {
    if (h!=1&&adj[h].size()==1) return adj[h][0].second;
    int ret = 0;
    for (auto& e : adj[h]) {
        if(e.first==p) continue;
        ret+=min(e.second,dfs(e.first,h));
    }
    return ret;
}
int main() {
    scanf("%d", &T);
    while (T--) {
        scanf("%d %d", &n, &m);
        adj.clear();
        adj.resize(n+1);
        for (int i = 0; i<m; ++i) {
            int u, v, w;
            scanf("%d %d %d", &u, &v, &w);
            adj[u].push_back({v,w});
            adj[v].push_back({u,w});
        }
        printf("%d\n", dfs(1, 0));
    }
}
```