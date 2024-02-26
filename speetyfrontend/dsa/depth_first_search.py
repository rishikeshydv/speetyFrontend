"""
  Execution:    python depth_first_search.py filename.txt s
  Data files:   tinyG.txt

  Run depth first search on an undirected graph. change import and line 45
  Runs in O(E + V) time.

 % python depth_first_search.py tinyG.txt 0
  0 1 2 3 4 5 6
  NOT connected

 % python depth_first_search.py tinyG.txt 9
  9 10 11 12
  NOT connected

 """
from graph import Graph

class DepthFirstSearch:

    def __init__(self, G, s):
        self.marked = [False] * G.V
        self.edgeTo = [None]  * G.V
        self.count = 0
        self.dfs(G, s)

    def dfs(self, G, v):
        self.marked[v] = True
        self.count += 1
        for w in G.adj[v]:
            if not self.marked[w]:
                self.edgeTo[w] = v 
                self.dfs(G, w)

if __name__ == '__main__':
    import sys
    s = int(sys.argv[2])
    g = Graph(filename=sys.argv[1])
      
    search = DepthFirstSearch(g, s)
    
    print("Reachable from", s, ":", \
          [v for v in range(g.V) if search.marked[v]], end = "")     
        
    print(" Connected:", search.count == g.V)
    for v, edge in enumerate(search.edgeTo):
       print(v,edge)