import {Component, OnInit} from '@angular/core';
import {Admin} from "../../../models/admin";
import {AdminService} from "../../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins: Admin[] = [];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAllAdmins().subscribe(admins => {
      this.admins = admins;
    });
  }

  deleteAdmin(adminId: number): void {
    this.adminService.deleteAdmin(adminId).subscribe(() => {
      this.getAdmins();
    });
  }

  updateAdmin(idAdmin: number) {
    this.router.navigate(['/edit-admin', idAdmin]);
  }
}
