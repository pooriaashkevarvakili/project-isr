export default eventHandler(async (event) => {
    const storage = useStorage('data');
    await storage.setItem('userId', 'id');
  
    return {
      id: await dataStorage.getItem('userId'),
    };
  });