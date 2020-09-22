import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state= {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Text describing the specific service'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Text describing the specific service'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'Text describing the specific service'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Text describing the specific service'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
