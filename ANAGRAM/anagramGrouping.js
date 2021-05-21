function AnagramGrouping(data) {
  const answer = [];
  var group = [];
  var idx_data = 0;
  while (data.length > 0) {
    if (group.length === 0) {
      group.push(data[idx_data]);
      data.splice(data.indexOf(group[0]), 1);
      idx_data = -1;
    } else {
      if (group[0].length === data[idx_data].length) {
        var group_idx = 0;
        var str_check = 0;
        while (group_idx < group[0].length) {
          if (data[idx_data].includes(group[0][group_idx])) {
            str_check = str_check + 1;
            if (str_check === group[0].length) {
              group.push(data[idx_data]);
            }
            group_idx = group_idx + 1;
          } else {
            break;
          }
        }
      }
    }
    if (idx_data === data.length - 1) {
      answer.push(group);
      for (let i = 1; i < group.length; i++) {
        data.splice(data.indexOf(group[i]), 1);
      }
      idx_data = -1;
      group = [];
    }
    idx_data = idx_data + 1;
  }
  return answer;
}
console.log(
  AnagramGrouping(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'])
);
