console.log(Array.from({ length: 10 }, () => crypto.randomUUID().slice(0, 8)).join('\n'));
