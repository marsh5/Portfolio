import React, {useState, useEffect, useCallback} from 'react'
import './Background.css'
import Particles from 'react-particles-js'

function Background() {

    const allViewports = {
        xs: {
            minWidth: 0,
            val: 1,
        },
        sm: {
            minWidth: 550,
            val: 2,
        },
        md: {
            minWidth: 725,
            val: 3,
        },
        lg: {
            minWidth: 990,
            val: 4,
        },
        xl: {
            minWidth: 1250,
            val: 5,
        },
        xxl: {
            minWidth: 1620,
            val: 6,
        }
    }

    const getViewportSize = () => {
        const viewportWidth = window.innerWidth;
        for(const type in allViewports) {
            if(allViewports[type].minWidth > viewportWidth){
                return allViewports[type].val
            }
        }
        return 6;

    }

    const [viewport, setViewport] = useState(getViewportSize());

   

    

    const handleResize = useCallback(() => {
		setViewport(getViewportSize());
	}, []);


    useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);


    return (
        <div className="background">
            <Particles className="particles-container"
            params={{
                particles: {
                    color: {
                        value: '#18ff10',
                    },
                    opacity: {
                        value: .55,
                    },
                    line_linked: {
                        color: '#18ff10',
                        opacity: 0.35,
                        distance: Math.max(viewport * 42, 200),
                    },
                    number: {
                        value: viewport * 10,
                    },
                    size: {
                        value: 2,
                    },
                    move: {
                        speed: 2,
                    },
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        onclick: {
                            enable: false,
                            mode: 'bubble',
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            speed: 0.1,
                            color: '#c40000'
                        },
                        bubble: {
                            size: 10,
                        },
                        trail: {
                            delay: 1,
                            quantity: 1,
                        },
                        light: {
                            area: {
                                radius: 5,
                            },
                            shadow: {
                                length: 100,
                            },
                        },
                    },
                },
            }}
            
            />
            <div className="bg-pattern"></div>
        </div>
    )
}

export default Background
