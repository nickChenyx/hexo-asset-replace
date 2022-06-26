module.exports = function (data) {
  data.content = data.content.replace(
    /\!\[(.*)\]\((.*)\)/g,
    (match, text, url, offset, string) => {
      if (/^\/source(.*)/.test(url)) {
	      const asset = url.replace(/^\/source(.*)/, '$1');
        return `![${text}](${asset ? ` ${asset}` : 'NOT-FOUND-ASSET'})`;
      }
      return string;
    },
  );
  return data;
};
