async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Due to the network lag, graphql may not catch wallets updates instantly
const afterRun = async (tx) => {
  if (locklift.network === 'dev' || locklift.network === 'main') {
    await sleep(30000);
  }
};


const getRandomNonce = () => Math.random() * 64000 | 0;


module.exports = {
  afterRun,
  getRandomNonce,
};