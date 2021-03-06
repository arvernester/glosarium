@extends('layouts.app')

@section('header')
<header class="page-header bg-img size-lg" style="background-image: url({{ asset('img/bg-banner2.jpg') }})">
    <div class="container">
        <div class="header-detail">
            <div class="hgroup">
                <h1>{{ $word->word }} <small>{{ $word->pronounciation }}</small></h1>
                <h3>{{ strtolower($word->group->name) }}</h3>
            </div>
            <time datetime="{{ $word->created_at->format('Y-m-d H:i:s') }}">{{ $word->created_at->diffForHumans() }}</time>
            <hr>

            @if(! empty($word->descriptions))
                <ol>
                @foreach($word->descriptions as $description)
                    <li>
                        {{ $description->text }}
                        <span class="sample">{{ $description->sample }}</span>
                    </li>
                @endforeach
                </ol>

                <p>Sumber: <strong>{{ $word->source }}</strong>.</p>
            @else
                <div class="alert alert-info">
                    Tidak ada deskripsi untuk kata "{{ $word->word }}".
                </div>
            @endif

            <ul class="details cols-3">
                @if (! empty($word->user))
                <li>
                    <i class="fa fa-user fa-fw"></i>
                    <span><a href="{{ route('user.profile.show', $word->user->username) }}" title="Lihat profil {{ $word->user->name }}">{{ $word->user->name }}</a></span>
                </li>
                @endif
                @if (! empty($word->short_url))
                <li>
                    <i class="fa fa-link fa-fw"></i>
                    <span>{{ $word->short_url }}</span>
                    <span>
                    <a href="#" id="copy-url" title="Salin tautan pendek" data-clipboard-text="{{ $word->short_url }}"><i class="fa fa-copy fa-fw"></i></a>
                    </span>
                </li>
                @endif
            </ul>
            <div class="button-group">
                <ul class="social-icons">
                    <li class="title">Bagikan pada</li>
                    <li><a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ url()->current() }}"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="google-plus" href="https://plus.google.com/share?url={{ url()->current() }}"><i class="fa fa-google-plus"></i></a></li>
                    @if (empty($word->short_url))
                        <li><a class="twitter" href="https://twitter.com/intent/tweet?url={{ url()->current() }}&text=Padanan kata {{ $word->origin }} ({{ $word->lang }}) adalah {{ $word->locale }}.&hashtags=glosarium,bahasa,indonesia"><i class="fa fa-twitter"></i></a></li>
                    @else
                        <li><a class="twitter" href="https://twitter.com/intent/tweet?url={{ $word->short_url }}&text=Padanan kata {{ $word->origin }} ({{ $word->lang }}) adalah {{ $word->locale }}.&hashtags=glosarium,bahasa,indonesia"><i class="fa fa-twitter"></i></a></li>
                    @endif
                    <li><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url={{ url()->current() }}&title=Padanan kata {{ $word->origin }} ({{ $word->lang }}) adalah {{ $word->locale }}&summary=&source="><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <div class="action-buttons">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary"><i class="fa fa-thumbs-up fa-fw"></i> 0</button>
                        <button type="button" class="btn btn-danger"><i class="fa fa-thumbs-down fa-fw"></i> 0</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
@endsection

@section('content')
<section class="no-padding-top">
    <div class="container">
        <h3 class="text-center">Diskusi Tentang Kata "{{ $word->word }}"</h3>
        @include('partials.disqus.comment', [
            'url' => route('dictionary.word.show', [$word->word]), 
            'id' => sha1($word->id) 
        ])
    </div>
</section>
@endsection

@push('js')
<script id="dsq-count-scr" src="//glosarium.disqus.com/count.js" async></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>
<script>
    var clipboard = new Clipboard('#copy-url')
</script>
@endpush