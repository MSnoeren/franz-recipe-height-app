module.exports = Franz => {
    /**
     * Get the notification count.
     *
     * @return void
     */
    function getNotifications() {
        const badge = document.querySelector('.SidebarSection .Badge.Badge--unreadTheme');

        if (badge && badge.innerText) {
            Franz.setBadge(parseInt(badge.innerText));
        }
    }

    Franz.loop(getNotifications);
}
