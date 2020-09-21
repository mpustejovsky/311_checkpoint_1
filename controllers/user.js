const express = require('express')

const { users } = require('../data/index.js')
const router = express.Router()

const getAllUsers = (req, res) => {

    res.json(users);

};


const getUsersId = (req, res) => {


    const found = users.some(currentValue => currentValue.id == req.params.id);

    if (found) {
        res.send(users.filter(currentValue => currentValue.id == req.params.id));
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
};



const postUsers = (req, res) => {

    newIDN = users.length + 1
    const newPost = {
        id: newIDN,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
            street: req.body.address.street,
            suite: req.body.address.suite,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode,
            geo: {
                lat: req.body.address.geo.lat,
                lng: req.body.address.geo.lng
            }
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
            name: req.body.company.name,
            catchPhrase: req.body.company.catchPhrase,
            bs: req.body.company.bs
        }
    }



    //pushing the new user into the array
    users.push(newPost)
    //requesting the list of users
    res.json(users)
}

const deleteUsers = (req, res) => {
    const found = users.find(user => user.id == req.params.id);
    if (found) {
        console.log(found.id)
        const userObject = users.filter(user => user.id == req.params.id);
        let index = users.map(function (findIndex) { return findIndex.id; }).indexOf(found.id);
        console.log(index)
        users[index].isActive = false
        res.send("msg: user set to inactive");
    } else {
        res.status(400).json({ msg: `User id ${req.params.id} not found.` });
    }
}

const updateUsers = (req, res) => {

    const found = users.find(user => user.id == req.params.id);
    console.log("found:", found.id)
    let index;
    if (found) {
        index = users.map(function (findIndex) { return findIndex.id; }).indexOf(found.id);
        console.log("here is index" + index)
        users[index] = {
            id: found.id,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            address: {
                street: req.body.address.street,
                suite: req.body.address.suite,
                city: req.body.address.city,
                zipcode: req.body.address.zipcode,
                geo: {
                    lat: req.body.address.geo.lat,
                    lng: req.body.address.geo.lng
                }
            },
            phone: req.body.phone,
            website: req.body.website,
            company: {
                name: req.body.company.name,
                catchPhrase: req.body.company.catchPhrase,
                bs: req.body.company.bs
            }
        }


        res.json(users[index])
    }
}

module.exports = { getAllUsers, getUsersId, postUsers, deleteUsers, updateUsers }
