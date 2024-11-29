const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


const PLAYER_STORAGE_KEY = 'VI-PLAYER'
// function of load current song
const heading = $('.header h2') 
const cdThumb = $('.cd-thumb') 
const audio = $('#audio')

// function of handleEventFunction 
const cd = $('.cd-thumb'); 

const playBtn = $('.control-toggle-play') 
const player = $('.player')

// var when move input audio 
const progressSong = $('#progress'); 

// button next and button previous
const nextBtn = $('.control-next'); 
const prevBtn = $('.control-previous');  

const randomBtn = $('.control-random');  
const repeatBtn = $('.control-repeat');  
const playList = $('.playlist');   


const searchInput = $('.search-input');  
const suggestionList = $('.suggestion-list'); 



const app = {    
    
    currentIndex: 0, 
    isPlaying: false, 
    isRandom: false, 
    isRepeat: false,  
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {}, 
    songs: [
        { 
            image: "./Img/Phan Dinh Tung.png",
            title: "Hãy thắp sáng lên",
            author: "Phan Đình Phùng",
            path: "./Music/Hãy Thắp Sáng Lên.mp3",
        }, 
        {   
            image: "./Img/Lua-thieng-bung-chay.jpg",
            title: "Lửa Thiêng Bùng Cháy",
            author: "Phạm Hoàng Thái", 
            path: "./Music/Vũ Điệu - Lửa Thiêng Bừng Cháy - GLV Gx.Truyền Tin.mp3",
        },   
       
        {
            image: "./Img/These-alone-are-enough.jpg",
            title: "Dâng và Xin",
            author: "Dan Schutte", 
            path: "./Music/Dâng Và Xin (These Alone Are Enough) (st_ Dan Schutte) _ Lê Quốc Tuấn.mp3", 
        },
        {
            image: "./Img/hat-giong-tinh-yeu.jpg",
            title: "Hạt Giống Tình Yêu",
            author: "Lm Phương Anh", 
            path: "./Music/Hạt Giống Tình Yêu (Sáng tác_ Lm Phương Anh) - Minh Quyền ft. Phan Tân _ MV LYRICS.mp3", 
        },
        {
            image: "./Img/2-ngay-1-dem.jpg",
            title: "2 ngày 1 đêm",
            author: "Da Lab", 
            path: "./Music/2 Ngày 1 Đêm.mp3", 
        }, 
        {
            image: "./Img/bong-bong-bang-bang.jpg",
            title: "Bống bống bang bang",
            author: "365Daband", 
            path: "./Music/365DABAND - BỐNG BỐNG BANG BANG _ OFFICIAL MV (TẤM CÁM_ CHUYỆN CHƯA KỂ OST).mp3", 
        },
        {
            image: "./Img/Taize.jpg",
            title: "Canterio ao senhor",
            author: "Taize", 
            path: "./Music/Cantehior ao senhor.mp3", 
        },  

        { 
            image: "./Img/Yiruma.jpg",
            title: "_River_Flows_in_You_",
            author: "Yiruma",
            path: "./Music/Yiruma______________-_River_Flows_in_You_[_YouConvert.net_].mp3",

        },  
        { 
            image: "./Img/Yiruma.jpg",
            title: "Kiss the Rain",
            author: "Yiruma",
            path: "./Music/Yiruma______________-_Kiss_the_Rain_[_YouConvert.net_].mp3",

        }, 
        { 
            image: "./Img/Về-Bên-Chúa.jpg",
            title: "Về Bên Chúa", 
            author: "Phùng Minh Mẫn",
            path: "./Music/V____BEN_CHUA___ANGELO_CHOIR___ANGELO_BAND___MV_4K__OFFICIAL__[_YouConvert.net_].mp3",
        },  
        { 
            image: "./Img/such-a-happy-day.jpg", 
            title: "Such a Happy Day",
            author: "The_Monroes",
            path: "./Music/The_Monroes_-_Such_A_Happy_Day_[_YouConvert.net_].mp3" ,
        },  
        { 
            image: "./Img/Taize.jpg", 
            title: "Nguyện Xin Thần Khí Chúa",
            author: "Taize Việt Nam",
            path: "./Music/Taize_-_Kristus__din_Ande_Nguy___n_Xin_Th___nKhi______ng_C___u________Vietnamese__[_YouConvert.net_].mp3",
        },  

        { 
            image: "./Img/I-will-follow-him.jpg", 
            title: "I will follow you - Nguyện theo chân Chúa luôn",
            author: "Sister Act",
            path: "./Music/Sister_Act-_I_Will_Follow_Him_[_YouConvert.net_].mp3",
        },  
       
        { 
            image: "./Img/Pho-thac.jpg", 
            title: "Phó Thác",
            author: "Thánh ca Acoustic",
            path: "./Music/PHO_THAC___THANH_CA_ACOUSTIC___MV_4K_[_YouConvert.net_].mp3",
        }, 
        { 
            image: "./Img/mai-yeu-giesu.jpg", 
            title: "Mãi yêu Giesu",
            author: "Lucky Dance Team",
            path: "./Music/MAI_YEU_GIESU_______NG_QUANG___C______I___U_CONG_GIAO_M___I_NH___T_[_YouConvert.net_].mp3",
        }, 
        { 
            image: "./Img/hien-te.jpg", 
            title: "Hiến Tế 22",
            author: "Gia An",
            path: "./Music/Hi___n_T____22___Gia_An_[_YouConvert.net_].mp3",
        }, 
        { 
            image: "./Img/Chung-song.jpg", 
            title: "Chung sống",
            author: "Kasim Hoàng Vũ",
            path: "./Music/Chung_s___ng_-_LHV_Khuy___n_tai_Qu___n_C___ng_[_YouConvert.net_].mp3",
        }, 
        { 
            image: "./Img/bai-ca-tom-ca.jpg", 
            title: "Bài Ca Tôm Cá",
            author: "Bé Nguyễn Minh Chiến",
            path: "./Music/Bai_Ca_Tom_Ca_-_Yong_Anhh_ft__Be_Nguy___n_Minh_Chi___n___OST_Anh_Th___y_Ngoi_Sao_[_YouConvert.net_].mp3",
        }, 
    
    ], 
    setConfig: function(key, value){ 
        this.config[key] = value; 
        localStorage.setItem[PLAYER_STORAGE_KEY, JSON.stringify(this.config)]
    },  

    render: function() { 
        const htmls = this.songs.map((song, index) => {
            return `
               <div  class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                   <div class="playlist-cd"
                        style="background-image: url('${song.image}');">
                   </div>
                   <div class="body">
                       <h3 class="body-title">${song.title}</h3>
                       <p class="body-author">${song.author}</p>
                       <p class="body-path>${song.path}</p>
                   </div>
                   <div class="option">
                       <i class="fas fa-ellipsis-h"></i>
                   </div>
               </div> 
           `;
        });
   
        playList.innerHTML = htmls.join('');
    },
     
    handleEvents: function(){   
        const _this = this; 
    //    Resolve when oversize or resize the CD 
        const cdWidth = cd.offsetHeight; 

        const playListElement = document.querySelector('.playlist') 

        playListElement.onscroll = function(){  
            const scrollTop = playListElement.scrollTop;

            const newCdWidth = cdWidth - scrollTop; 

            cd.style.height = newCdWidth > 0 ? newCdWidth + 'px' : 0;  
            // adjust the height of the CD element as the user scrolls 
            // Prevent the negative height
            // cd.style.height = newCdWidth + 'px'; // Update CD width based on scroll position 
            cd.style.opacity = newCdWidth / cdWidth; 
            // Create a fade-out effect for the CD as it shrinks
            console.log(scrollTop);
        } 


        // Process when click play 
        playBtn.onclick = function(){  
            if (_this.isPlaying) {
                _this.isPlaying = false;
                audio.pause(); 
                cdThumnAnimation.pause();
            } else {
                _this.isPlaying = true; 
                audio.play();
                // Set play icon 
                // cdThumnAnimation.start(); 
            } 


            // when song play, change the play button icon and class
            audio.onpause = function(){
                _this.isPlaying = false;
                player.classList.remove('player-pause');
                playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Set play icon
                player.classList.add('player'); 
                cdThumnAnimation.pause();
            }

            // when song ended, change the song
            audio.onended = function(){ 
                if(_this.isRepeat){ 
                    audio.play();
                } else{ 
                    nextBtn.click(); 
                }
                // _this.currentIndex = (_this.currentIndex + 1) % _this.songs.length; // play next song
                // _this.loadCurrentSong();
                // _this.isPlaying = false;
                // player.classList.remove('player');
                // playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Set play icon
                // player.classList.add('player-pause'); 
            } 
            
            // Listen the click on playList
            playList.onclick = function(e) {  
                const songIndex = e.target.closest('.song:not(.active'); 
                const option = e.target.closest('.option')
                if(songIndex || option){ 
                    if(songIndex){  
                        _this.currentIndex = parseInt(songIndex.dataset.index); 
                        _this.loadCurrentSong(); 
                        _this.isPlaying = true; 
                        _this.render(); 
                        audio.play();  
                    } 

                    if(option){  

                    }
                }
            }
            

            // when song changing, change the play button icon and class 

              // when song play 
            audio.onplay = function(){
                _this.isPlaying = true;
                player.classList.remove('player');
                playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Set pause icon
                player.classList.add('player-pause'); 
                cdThumnAnimation.play(); 

            }

            // When the audio bar change in song, 
            audio.ontimeupdate = function(){ 
                // console.log(audio.currentTime);
                const currentTime = audio.currentTime;
                const duration = audio.duration;
                if(duration){
                    const progress = (currentTime / duration) * 100;  
                    progressSong.value = progress;  
                }
            }   



        //   Progress when rewinding a song
           
            progressSong.onchange = function(e){ 
                const currentTime = (e.target.value / 100) * audio.duration;
                audio.currentTime = currentTime;
                // console.log(currentTime);
            }  

            const cdThumnAnimation = cdThumb.animate([
               { transform: 'rotate(360deg)'} 
            ], { 
                duration: 10000,
                iterations: Infinity,
                fill: 'forwards',
            })  
            // cdThumnAnimation.pause(); // pause the animation when the player is paused

             // when click previous button, play the previous song// when click previous button, play the previous song

            nextBtn.onclick = function () {  
                if (_this.isRandom){ 
                    _this.playRandomSong();   
                    
                } else { 
                    _this.nextSong(); 
                }
                // _this.nextSong();   
                _this.render(); 
                _this.scrollToActiveSong();

            };  

            prevBtn.onclick = function () { 
                if (_this.isRandom){ 
                    _this.playRandomSong();  
                } else { 
                    _this.prevSong(); 
                }  // play the previous song
                // _this.prevSong();  // play the previous song
                _this.render();  // render the playlist 
                _this.scrollToActiveSong(); // scroll to the active song
            }  

            // Resolve next song when audio ended
            repeatBtn.onclick = function () { 
                _this.isRepeat = !_this.isRepeat; // Toggle repeat mode
                repeatBtn.classList.toggle('active', _this.isRepeat);   
                _this.setConfig('control-repeat', _this.isRepeat);
                // Loop the song when the repeat button is clicked
            }

            randomBtn.onclick = function(e) {
                
                _this.isRandom = !_this.isRandom 
                randomBtn.classList.toggle('active', _this.isRandom);
                _this.setConfig('control-random', _this.isRandom)
                // Load the random song 
                
            }


            
        } 
    },   
  

    defineProperties: function(){ 
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            
            },
            set: function(value){
                if(value >= 0 && value < this.songs.length){
                    this._currentIndex = value;
                }
            }
        });
        this.currentIndex = 0;  // set the initial current index to 0
    },   

    scrollToActiveSong: function(){
        setTimeout(() => { 
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block:'nearest'
            })
        }, 500)
    },



    loadCurrentSong: function(){
        heading.textContent = this.currentSong.title; 
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`; 
        audio.src = this.currentSong.path;  // load the source of audio file
        console.log(heading, cdThumb, audio);
    },    

    loadConfig: function(){
        this.isRandom = this.config.isRandom; 
        this.isRepeat = this.config.isRepeat;
    }, 

    

    nextSong: function () {
        this.currentIndex++;  // Moves to the next song in the playlist by updating the index that tracks the currently selected song.
        if (this.currentIndex >= this.songs.length) { 
            this.currentIndex = 0; // Reset to the first song if at the end
        }
        this.loadCurrentSong(); // Load the updated song
        if (this.isPlaying) {
            audio.play(); // Automatically play the next song if the player is playing
        } 
    },  

    prevSong: function () {
        this.currentIndex--;  // Moves to the previous song in the playlist by updating the index that tracks the currently selected song.
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1; // Reset to the last song if at the beginning
        }
        this.loadCurrentSong(); // Load the updated song
        if (this.isPlaying) {
            audio.play(); // Automatically play the previous song if the player is playing
        }
    }, 

    playRandomSong: function() { 
        let newIndex
        do{ 
            newIndex = Math.floor(Math.random() * this.songs.length); // Generate a random index within the range of the songs array
        } while (newIndex === this.currentIndex); // 
        
        this.currentIndex = newIndex; // Update the current index to the new random index
        this.loadCurrentSong(); // 
        if (this.isPlaying) {
            audio.play(); // Automatically play the random song if the player is playing
        }
    },
     
   
    


    start: function() {     
        this.loadConfig(); 
        this.defineProperties(); 
        this.handleEvents();  
        this.loadCurrentSong();  // load the first song automatically into UI 

        // console.log(this.getCurrentSong());
        // this.nextSong(); 
        this.render(); 

        repeatBtn.classList.toggle('active', _this.isRepeat);   

        repeatBtn.classList.toggle('active', _this.isRepeat);
    }
}; 

app.start();
