import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { ModalService } from 'src/app/services/modal.service';

declare let $: any;

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styles: [],
})
export class FooterComponent implements OnInit {
	constructor(public modalService: ModalService) {
		this.modalService.privacidad = true;
	}

	ngOnInit(): void {}

	whatsApp() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'center',
			showConfirmButton: true,
			timerProgressBar: true,
			customClass: {
				confirmButton: 'back9',
			},
		});

		Toast.fire({
			title: '1 2345 6789',
			background: 'rgb(233,233,0)',
		});
	}
	openPrivacy() {
		this.modalService.privacidad = true;
		$('#privacidad').modal();
	}
	close() {
		setTimeout(() => {
			$('#privacidad ').modal('hide');
		}, 3000);
	}

	goToAlert() {
		$('#privacidad').modal('hide');
		setTimeout(() => {
			$('#alert').modal();
		}, 500);
	}
}
