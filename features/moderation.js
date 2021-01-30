require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');
    function eval(message)
    {
      const threshold = 0.85;
      toxicity.load(threshold).then(model => {
        const sentences = message.content;
      
        model.classify(sentences).then(predictions => {
          if(predictions[0].results[0].match || predictions[1].results[0].match || predictions || predictions[2].results[0].match || predictions[3].results[0].match)
          {
            return true;
          }
          else
          {
            return false;
          }
      });
     })
    }
    module.exports.eval = eval();