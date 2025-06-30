//3. Use fetch() with async/await to load a local JSON file (data.json)
//  and display its contents in the console

async function user() {
    let tasks = (await fetch("task.json"));
    let data = await tasks.json();
    return data;
}
user().then((val) => {
    console.log(val);
})