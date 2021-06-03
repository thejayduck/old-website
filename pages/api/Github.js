export default async (req, res) => {
    const url = `https://api.github.com/repos/thejayduck/lightnoveltracker`
    const response = await fetch(url);
    const json = response.json();
    const repos = Object.keys(json);

    console.log(repos);

    return res.status(200).json({
        repos
    });
}