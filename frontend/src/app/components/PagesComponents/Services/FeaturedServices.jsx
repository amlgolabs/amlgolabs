import React from 'react'
import styles from "../../../styles/pages/Components/Services/FeaturedServices.module.css"
import Image from 'next/image'

const FeaturedServices = ({ heading, services }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.servicesContainer}>
                <div className={styles.heading}>
                    <h2>{heading}</h2>
                </div>
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className={`${styles.FeaturedService} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign}`}
                    >
                        <div className={styles.serviceContent}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <div className={styles.buttonDiv}>
                                <button className={styles.button1}>{service.buttons[0]}</button>
                                <button className={styles.button2}>{service.buttons[1]}</button>
                            </div>
                        </div>
                        <div className={styles.serviceImage}>
                            <Image
                                height={500}
                                width={500}
                                src={service.image}
                                alt={service.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedServices;
