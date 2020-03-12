window.BENCHMARK_DATA = {
  "lastUpdate": 1583992792291,
  "repoUrl": "https://github.com/jkelleyrtp/benchmark_kdtree",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jkelleyrtp@gmail.com",
            "name": "Jonathan Kelley",
            "username": "jkelleyrtp"
          },
          "committer": {
            "email": "jkelleyrtp@gmail.com",
            "name": "Jonathan Kelley",
            "username": "jkelleyrtp"
          },
          "distinct": true,
          "id": "cecd520261695c46a13b5c40a57d32c35ff2783c",
          "message": "Change branch",
          "timestamp": "2020-03-12T01:55:21-04:00",
          "tree_id": "0234d029032558a10f94d7fb6f83d28704d5c43d",
          "url": "https://github.com/jkelleyrtp/benchmark_kdtree/commit/cecd520261695c46a13b5c40a57d32c35ff2783c"
        },
        "date": 1583992791911,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_adding_same_node_to_1000_tree",
            "value": 46,
            "range": "+/- 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_creating_1000_node_tree",
            "value": 107931,
            "range": "+/- 5,749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_incrementally_building_the_1000_tree",
            "value": 214618,
            "range": "+/- 11,763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_single_loop_times_for_1000_node_tree",
            "value": 205,
            "range": "+/- 110",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}