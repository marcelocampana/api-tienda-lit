export default async function modelSync(model) {
  try {
    // await model.sync();
    console.log(`${model.name} model synced successfully`);
  } catch (error) {
    console.log(`Error syncing ${model.name} model`);
  }
}
