import React, {useState, useEffect } from "react";
import axios from "axios";

const Profile = ({thing, id}) => {

    const style = {
        listStyle: "none",
        fontSize: "large",
    }

    const [profile, setProfile] = useState({});
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${thing}/${id}`)
            .then(res => setProfile(res.data))
            .catch(err => setError({
                message: "These are not the droids you're looking for.",
                img: ""}))
    }, [thing, id])

    return (
        <>
            <h1>{profile.name}</h1>
            {thing === "people" ?
                <ul style={style}>
                    <li>Hair Color:: {profile.hair_color}</li>
                    <li>Eye Color:: {profile.eye_color}</li>
                    <li>Skin Color:: {profile.skin_color}</li>
                    <li>Height:: {profile.height}cm</li>
                </ul> : error.message}
            {thing === "planets" ?
                <ul style={style}>
                    <li>Terrain:: {profile.terrain}</li>
                    <li>Climate:: {profile.climate}</li>
                    <li>Diameter:: {profile.diameter}km</li>
                    <li>Gravity:: {profile.gravity}</li>
                </ul> : error.message}
            {thing === "starships" ?
                <ul style={style}>
                    <li>Manufacturer:: {profile.manufacturer}</li>
                    <li>Model:: {profile.model}</li>
                    <li>Hyperdrive Rating:: {profile.hyperdrive_rating}</li>
                    <li>Passenger Capacity:: {profile.passengers}</li>
                </ul> : error.message}
        </>
    );
}

export default Profile;