<template>
    <div class="flexGrid anim--fadeIn">
        <div class="card flexGrid-item flexGrid-item--3">
            <div class="card-header">
                <h2>Parch Linux KDE Plasma</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="splitter-item flexList">
                        <div class="text text--rich">
                            <p>
                                Parch Linux Plasma is the <strong>FlagShip</strong> Version of Parch Linux featuring KDE plasma Desktop.
                            </p>
                        </div>
                        <div class="spacer"></div>
                        <a href="https://mirror.parchlinux.com/plasma/ParchLinux-plasma-latest.iso" class="btn btn--primary">
                            <span class="mdi material-icons-outlined">save_alt</span>
                            <span>Download Now</span>
                        </a>
                    </div>
                    <div class="splitter-item card-image">
                        <img src="/assets/images/backgrounds/parch-plasma-desktop.png" alt="Parch Linux Plasma"
                            class="on-dark" />
                    </div>
                </div>
            </div>
        </div>
        <div class="card download flexGrid-item article--big flexGrid-item--2">
            <div class="card-header">
                <h2>Parch Linux Gnome</h2>
            </div>
            <div class="card-content">
                <div class="splitter">
                    <div class="flexList">
                        <div class="text text--rich">
                            <p>
                                Parch Linux Gnome is a version of ParchLinux featuring Gnome Desktop environment
                                instead of kde plasma.
                            </p>
                        </div>
                        <div class="spacer"></div>
                        <a href="https://mirror.parchlinux.com/gnome/ParchLinux-gnome-latest.iso" target="_blank"
                            class="btn btn--primary">
                            <span class="mdi material-icons">save_alt</span>
                            <span>Download Now</span>
                        </a>
                    </div>
                    <div class="card-image card-image--right">
                        <img src="/assets/images/backgrounds/parch-gnome-desktop.png" alt="Parch Linux Gnome"
                            class="on-dark" />
                    </div>
                </div>
            </div>
        </div>
        <div class="card card--blue">
            <div class="card-header">
                <h4>Parch Linux</h4>
                <h2>Developer Builds</h2>
            </div>
            <div class="card-content">
                <div class="flexList">
                    <div class="text text--rich">
                        <p>Interested in the future versions of Parch Linux?</p>
                        <p>
                            Join the developer program to get access to experimental builds of
                            Parch Linux. You will also have access to a direct channel with the
                            developers.
                        </p>
                    </div>
                    <router-link to="developers-program" class="btn btn--primary">
                        <span class="mdi material-icons">how_to_reg</span>
                        <span>Apply Now</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "download",
});
</script>
