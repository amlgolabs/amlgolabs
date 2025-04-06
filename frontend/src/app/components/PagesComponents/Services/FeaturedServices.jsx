import React from 'react';
import styles from "../../../styles/pages/Components/Services/FeaturedServices.module.css";
import Image from 'next/image';
import Link from 'next/link';

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

                            {(service.buttons?.length > 0 || service.link1 || service.link2) && (
                                <div className={styles.buttonDiv}>
                                    {service.buttons?.[0] && service.link1 && (
                                        <Link href={service.link1}>
                                            <button className={styles.button1}>
                                                {service.buttons[0]}
                                            </button>
                                        </Link>
                                    )}
                                    {service.buttons?.[1] && service.link2 && (
                                        <Link href={service.link2}>
                                            <button className={styles.button2}>
                                                {service.buttons[1]}
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
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
    );
};

export default FeaturedServices;
