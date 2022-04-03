export const myMixin = {
  methods: {
    arrayToString: (array) =>
      Array.isArray(array) ? array.map(({ type }) => type.name).toString() : "",
  },
};
