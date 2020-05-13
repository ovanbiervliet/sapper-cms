const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({secret: 'fnADrk_S37ACAUhcNFyzW-12-mNarO0G5lLXlN98'})

const getFaunaposts = async () => {
    try{
        const {data} = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('posts'))),
                q.Lambda(x => q.Select(['data'], q.Get(x)))
            )
        )
        return data
    } catch(e){
        console.log(e)
    }
}

// faunaposts
export default getFaunaposts;


