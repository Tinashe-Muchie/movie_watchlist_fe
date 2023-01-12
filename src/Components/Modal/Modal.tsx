import React, { useCallback, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { MdClose } from 'react-icons/md';
import './Modal.css';

export const Modal: React.FunctionComponent<{
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> =  ({showModal, setShowModal}) => {

    //const popupRef = useRef();
    const animation = useSpring({
        config: {
        duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    /*const closeModal = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
          setShowPopup(false);
        }
    };*/
    
    const keyPress = useCallback(
        (e:any) => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        },
        [setShowModal, showModal]
    );
    
    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
        {
            showModal? (
                <div className='background' 
                    //onClick={closePopup}
                >
                <animated.div style={animation}>
                    <div className='modal_wrapper'>
                    <div className='modal_content'>
                       {/* <p> {title} </p> */}
                    </div>
                    <MdClose
                        className='close_modal_button'
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                    </div>
                </animated.div>
                </div>
            )
            : null
        }
        </>
    );
}