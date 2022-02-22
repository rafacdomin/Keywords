import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'
import ReactDom from 'react-dom'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ isOpen, controlModal, children }) => {
	const modalRef = useRef(null)

	const closeModal = useCallback(
		event => {
			if (modalRef.current === event.target) {
				controlModal()
			}
		},
		[controlModal],
	)

	return isOpen
		? ReactDom.createPortal(
				<Wrapper ref={modalRef} onClick={closeModal}>
					{children}
				</Wrapper>,
				modalRoot,
		  )
		: null
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	controlModal: PropTypes.func.isRequired,
}

export { Modal }
