import { camelToSentenceCase } from "@reactiff/ui-core";

const keys = ['verbs', 'flashCards', 'sentences'];

export default function makeMenu(history) {
  return keys.map(key => {
    return {
        key,
        caption: camelToSentenceCase(key),
        onClick: () => history.push(`/${key.toLowerCase()}`),
        selected: false,
    };
  });
}
