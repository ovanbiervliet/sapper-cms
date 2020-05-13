const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({secret: 'fnADrk_S37ACAUhcNFyzW-12-mNarO0G5lLXlN98'})

let faunaposts = []

client.query(
    q.Map(
        q.Paginate(q.Documents(q.Collection('posts'))),
        q.Lambda(x => q.Select(['data'], q.Get(x)))
    )
)
    .then(
        ret => {
            faunaposts = ret.data
            console.log(faunaposts)
        }
    )
    .catch(err => { console.log(err) })
}

// faunaposts
export default faunaposts;