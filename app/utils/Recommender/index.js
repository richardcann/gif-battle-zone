import randomWords from 'random-words';

const dataset = {
  'Expert One': {
    dog: 2.5,
    golazo: 3.5,
    yas: 3.0,
    trump: 3.5,
    funny: 2.5,
    yelling: 3.0
  },
  'Expert Two': {
    dog: 3.0,
    golazo: 3.5,
    yas: 1.5,
    trump: 5.0,
    yelling: 3.0,
    funny: 3.5
  },
  AverageJoe: {
  }
};

const len = function (obj) {
  let len = 0;
  for (const i in obj) {
    len++;
  }
  return len;
};

// calculate the euclidean distance btw two items
const euclidean_score = function (dataset, p1, p2) {
  const existp1p2 = {};
  for (const key in dataset[p1]) {
    if (key in dataset[p2]) {
      existp1p2[key] = 1;
    }
    if (len(existp1p2) == 0) return 0;// check if it has a data
    const sum_of_euclidean_dist = [];// store the  euclidean distance

    // calculate the euclidean distance
    for (const item in dataset[p1]) {
      if (item in dataset[p2]) {
        sum_of_euclidean_dist.push(Math.pow(dataset[p1][item] - dataset[p2][item], 2));
      }
    }
    let sum = 0;
    for (let i = 0; i < sum_of_euclidean_dist.length; i++) {
      sum += sum_of_euclidean_dist[i];
    }
    const sum_sqrt = 1 / (1 + Math.sqrt(sum));
    return sum_sqrt;
  }
};

const similar_user = function (dataset, person, num_user, distance) {
  const scores = [];
  for (const others in dataset) {
    if (others != person && typeof (dataset[others]) !== 'function') {
      const val = distance(dataset, person, others);
      const p = others;
      scores.push({ val, p });
    }
  }
  scores.sort((a, b) => (b.val < a.val ? -1 : b.val > a.val ? 1 : b.val >= a.val ? 0 : NaN));
  const score = [];
  for (let i = 0; i < num_user; i++) {
    score.push(scores[i]);
  }
  return score;
};
const recommendation_eng = function (dataset, person, distance) {
  let totals = {
      setDefault(props, value) {
        if (!this[props]) {
          this[props] = 0;
        }
        this[props] += value;
      }
    },
    simsum = {
      setDefault(props, value) {
        if (!this[props]) {
          this[props] = 0;
        }

        this[props] += value;
      }
    },
    rank_lst = [];
  for (const other in dataset) {
    if (other === person) continue;
    const similar = distance(dataset, person, other);

    if (similar <= 0) continue;
    for (var item in dataset[other]) {
      if (!(item in dataset[person]) || (dataset[person][item] == 0)) {
        totals.setDefault(item, dataset[other][item] * similar);
        simsum.setDefault(item, similar);
      }
    }
  }

  for (let item in totals) {
    if (typeof totals[item] !== 'function') {
      const val = totals[item] / simsum[item];
      rank_lst.push({ val, items: item });
    }
  }
  rank_lst.sort((a, b) => (b.val < a.val ? -1 : b.val > a.val ?
    1 : b.val >= a.val ? 0 : NaN));
  const recommend = [];
  for (const i in rank_lst) {
    recommend.push(rank_lst[i].items);
  }
  return [rank_lst, recommend];
};

function getRandomRating() {
  return Math.random() * (6);
}

export const getRecommendations = (() => recommendation_eng(dataset, 'AverageJoe', euclidean_score)[1]);
export const setNewRating = ((category, rating) => {
  const newCategory = randomWords();
  const criticOneNewRating = getRandomRating();
  const criticTwoNewRating = getRandomRating();
  const criticOneOldRating = getRandomRating();
  const criticTwoOldRating = getRandomRating();
  dataset['Expert One'][newCategory] = criticOneNewRating;
  dataset['Expert Two'][newCategory] = criticTwoNewRating;
  dataset['Expert One'][category] = criticOneOldRating;
  dataset['Expert Two'][category] = criticTwoOldRating;
  dataset.AverageJoe[category] = rating;
});
