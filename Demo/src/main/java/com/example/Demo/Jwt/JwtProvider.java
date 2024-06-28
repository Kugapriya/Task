package com.example.Demo.Jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtProvider {

    private static final String SECRET_KEY = "your_secret_key_here";
    private static final long JWT_EXPIRATION_MS = 3600000;

    private final SecretKey secretKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

     public String generateToken(String username) {
         Date now = new Date();
         Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION_MS);

         return Jwts.builder()
                 .setSubject(username)
                 .setIssuedAt(now)
                 .setExpiration(expiryDate)
                 .signWith(secretKey)
                 .compact();
     }


    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey(secretKey)
                    .parseClaimsJws(token);

            return !claims.getBody().getExpiration().before(new Date());
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }
}
