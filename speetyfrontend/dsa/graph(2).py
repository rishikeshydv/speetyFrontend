"""
   Execution:    python graph.py input.txt
   Data files:   tinyG.txt
 
   A graph, implemented using an array of sorted lists.
 
 """
import sys

class Graph:

    def __init__(self, v=None, filename=None):
        if filename is None:
            self.V = v
            self.E = 0
            self.adj = [list() for i in range(self.V)]
        else:
            infile = open(sys.argv[1], "r")
            self.V = int(infile.readline())
            self.E = 0
            
            self.adj = [list() for i in range(self.V)]
            E = int(infile.readline())
            for _ in range(E):
                v, w = infile.readline().split()
                self.add_edge(v, w)            
            infile.close()
        for adj in self.adj:
            adj.sort()

    def __str__(self):
        s = "%d vertices, %d edges\n" % (self.V, self.E)
        s += "\n".join("%d: %s" % (v, " ".join(str(w)
                   for w in self.adj[v])) for v in range(self.V))
        return s

    def add_edge(self, v, w):
        v, w = int(v), int(w)
        self.adj[v].append(w)
        self.adj[w].append(v)
        self.E += 1
        
    def adjacent(self, v):
        return self.adj[v]


if __name__ == '__main__':
    g = Graph(None, sys.argv[1])

    print(g)