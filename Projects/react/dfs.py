def dfs(graph, start, visited):
    visited.add(start)  
    print(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:  
            dfs(graph, neighbor, visited)
            
graph = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 6],
    4: [1],
    5: [2],
    6: [3]
}

visited = set()
dfs(graph, 0, visited)
