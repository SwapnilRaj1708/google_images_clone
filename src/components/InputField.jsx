import React, { useContext, useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import "./InputField.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../contexts/SearchContext'
import { ImagesContext } from '../contexts/ImagesContext'
import axios from 'axios'
import { DisplayContext } from '../contexts/DisplayContext'

export default function InputField() {
    const { search, setSearch } = useContext(SearchContext)
    const { images, setImages } = useContext(ImagesContext)
    const { display, setDisplay } = useContext(DisplayContext)

    const submitSearch = async (search) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID tDAhQVZXBpdlPRCedsQgGxwuQpw6XAp_hx8PkG9mm_4'
            },
            params: {
                query: search
            }
        })
        return response
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const handleSubmit = async () => {
        if (search.length !== 0) {
            const res = await submitSearch(search);
            // console.log(res);
            // console.log(res.data.results);
            setImages(res.data.results)
            setDisplay(false)
        }
    }

    return (
        <div className='input-container'>
            <InputGroup className="input-group" >
                <Form.Control value={search} onChange={handleChange}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </InputGroup>
        </div>
    )
}
