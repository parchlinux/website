<template>
    <div id="community" class="flexList anim--fadeIn">
        <div class="card card--full youtube">
            <!-- <div class="card-video-grid"> -->
                <div>
                    <div class="card-header">
                        <h3>
                            <span class="fa fa-brands fa-youtube"></span>
                            Youtube
                        </h3>
                    </div>
                    <div class="card-content">
                        <div class="text text--rich">
                            <p>We're always uploading new videos, so be sure to subscribe and hit the notification bell
                                to
                                stay up-to-date.
                                <br />
                                <br />
                                Don't forget to leave us a comment and let us know what you think of our videos!
                            </p>
                        </div>
                        <a class="btn btn--primary" href="https://www.youtube.com/@bssfoundation" target="_blank">
                            <span>Subscribe on youtube!</span>
                            <span class="mdi material-icons">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <!-- <div class="card-video">
                    <iframe src=""></iframe>
                </div> -->
            <!-- </div> -->
        </div>

        <div class="flexGrid flexGrid--3">
            <a href="https://discord.gg/9RW5cRByAM" class="card discord">
                <div class="card-header">
                    <h3>
                        <span class="fa fa-brands fa-discord"></span>
                        Discord
                    </h3>
                </div>
                <div class="card-content">
                    <div class="text text--rich">
                        <p>Beyond discussions, our Discord is the place to hang out, have fun, and connect with others.
                            This platform, with its high-quality voice and text features, fosters a vibrant space for a
                            thriving community.</p>
                    </div>
                </div>
            </a>
            <a href="https://ieji.de/@parchlinux" class="card mostodon">
                <div class="card-header">
                    <h3>
                        <span class="fa fa-brands fa-mastodon"></span>
                        Mostodon
                    </h3>
                </div>
                <div class="card-content">
                    <div class="text text--rich">
                        <p>We're always uploading new videos, so be sure to subscribe and hit the notification bell to
                            stay up-to-date.
                            <br />
                            <br />
                            Don't forget to leave us a comment and let us know what you think of our videos!
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://t.me/parchlinux" class="card telegram">
                <div class="card-header">
                    <h3>
                        <span class="fa fa-brands fa-telegram"></span>
                        Telegram
                    </h3>
                </div>
                <div class="card-content">
                    <div class="text text--rich">
                        <p>We're always uploading new videos, so be sure to subscribe and hit the notification bell to
                            stay up-to-date.
                            <br />
                            <br />
                            Don't forget to leave us a comment and let us know what you think of our videos!
                        </p>
                    </div>
                </div>
            </a>
        </div>

        <div class="card card--full matrix">
            <div class="card-header">
                <h3>
                    Matrix
                </h3>
            </div>
            <div class="card-content">
                <div class="text text--rich">
                    <p><b>Tired of relying on centralized platforms?</b> Matrix.to offers a revolutionary way to connect. It's a decentralized communication app, putting you in control of your data and interactions.
                        <br />
                        <br />
                        Join the future of communication. Sign up for Matrix.to today!
                    </p>
                </div>
                <a class="btn btn--primary" href="https://matrix.to/#/%23parch:matrix.org" target="_blank">
                    <span>Go to matrix.to!</span>
                    <span class="mdi material-icons">arrow_forward</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'community',
});
</script>
