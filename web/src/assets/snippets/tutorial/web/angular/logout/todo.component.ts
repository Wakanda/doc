logout() {
    this.wakanda.directory.logout().then(() => {
        this.router.navigate(['/login']);
    });
}
