let servers = [
    {id: '1', name: 'first'}
]

export const getAll = function (req, res) {
    res.status(200).json(servers);
}

export const create = function (req, res) {
    const newServer = {
      id: Date.now().toString(),
      ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const remove = function (req, res) {
    console.log("ID", req.params.id);
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({})
}